package com.revature.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.exc.MismatchedInputException;
import com.revature.dtos.ApproveDeny;
import com.revature.dtos.ErrorResponse;
import com.revature.dtos.RbDTO;
import com.revature.exceptions.InvalidRequestException;
import com.revature.exceptions.ResourceNotFoundException;
import com.revature.models.Reimbursement;
import com.revature.services.ReimbursementService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Set;

/**
 * Master Servlet for Reimbursement requests
 */
@WebServlet("/reimbursements")
public class ReimbursementServlet extends HttpServlet {
    ReimbursementService reimbService = new ReimbursementService();

    /**
     * Do Get Method to return lists of Reimbursement DTO's.
     * @param req HttpRequest
     * @param resp Http Ressponse
     * @throws IOException if there is an error mapping the request object
     */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        PrintWriter writer = resp.getWriter();
        resp.setContentType("application/json");
        try {
            String statusParam =  req.getParameter("status");
            String typeParam = req.getParameter("type");
            Integer loggedRole = (Integer) req.getSession().getAttribute("loggedinrole");
            //in user case
            if (loggedRole == 3){
                //get user ID
                Integer userId = ((Integer) req.getSession().getAttribute("userId"));
                List<RbDTO> reimbs = reimbService.getReimbByUserId(userId);
                String reimbJSON = mapper.writeValueAsString(reimbs);
                writer.write(reimbJSON);
                resp.setStatus(200);
            } else if (statusParam != null){
                if (loggedRole == 2){
                    //fin manager case by status
                    List<RbDTO> reimbs = reimbService.getReimbByStatus(Integer.valueOf(statusParam));
                    String reimbJSON = mapper.writeValueAsString(reimbs);
                    writer.write(reimbJSON);
                    resp.setStatus(200);
                }
            }else if (typeParam != null){
                if (loggedRole == 2){
                    //fin manager case by type
                    List<RbDTO> reimbs = reimbService.getReimbByType(Integer.valueOf(typeParam));
                    String reimbJSON = mapper.writeValueAsString(reimbs);
                    writer.write(reimbJSON);
                    resp.setStatus(200);
                }
            } else if (loggedRole == 2){
                //fin manager case All
                List<RbDTO> reimbs = reimbService.getAllReimb();
                String reimbJSON = mapper.writeValueAsString(reimbs);
                writer.write(reimbJSON);
                resp.setStatus(200);
            }

        } catch (ResourceNotFoundException rnfe){
            resp.setStatus(404);
            ErrorResponse err = new ErrorResponse(404,rnfe.getMessage());
            writer.write(mapper.writeValueAsString(err));
        } catch (NumberFormatException | InvalidRequestException nfe){
            resp.setStatus(400);
            ErrorResponse err = new ErrorResponse(404, "Malformed user id");
            writer.write(mapper.writeValueAsString(err));
        } catch (Exception e){
            resp.setStatus(500); //500 = internal server error
            ErrorResponse err = new ErrorResponse(500,"server: Sorry we are having issues.");
            writer.write(mapper.writeValueAsString(err));
        }
    }

    /**
     * Post method for entering Reimbursements into the DB
     */
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        PrintWriter writer = resp.getWriter();
        resp.setContentType("application/json");
        try {
            Reimbursement reimbursement = mapper.readValue(req.getInputStream(),Reimbursement.class);
            reimbursement.setAuthorId((Integer) req.getSession().getAttribute("userId"));
            reimbService.save(reimbursement);
            String newReimbJSON = mapper.writeValueAsString(reimbursement);
            writer.write(newReimbJSON);
            resp.setStatus(201);
        } catch (MismatchedInputException upe) {
            resp.setStatus(400);
            ErrorResponse err = new ErrorResponse(400,"Bad Request: malformed user object found in request body");
            writer.write(mapper.writeValueAsString(err));
        }catch (Exception e){
            resp.setStatus(500); //500 = internal server error
            ErrorResponse err = new ErrorResponse(500,"server: my bad.");
            writer.write(mapper.writeValueAsString(err));
        }
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        PrintWriter writer = resp.getWriter();

        try {
            Integer loggedRole = (Integer) req.getSession().getAttribute("loggedinrole");
            if (loggedRole == 3){
                //employee adding a reimbursement
                resp.setContentType("application/json");
                Reimbursement reimbursement = mapper.readValue(req.getInputStream(),Reimbursement.class);
                reimbursement.setAuthorId((Integer) req.getSession().getAttribute("userId"));
                reimbService.updateEMP(reimbursement);
                System.out.println(reimbursement);
                String newReimbJSON = mapper.writeValueAsString(reimbursement);
                writer.write(newReimbJSON);
                resp.setStatus(201);
            }
            if (loggedRole == 2){
                //fin manager updating a reimbursement
                ApproveDeny approveDeny = mapper.readValue(req.getInputStream(),ApproveDeny.class);
                Integer resolverId = (Integer) req.getSession().getAttribute("userId");
                if (approveDeny.getStatus() == 2){
                    reimbService.approve(resolverId, approveDeny.getId());
                    resp.setStatus(201);
                } else if (approveDeny.getStatus() == 3){
                    reimbService.deny(resolverId, approveDeny.getId());
                    resp.setStatus(201);
                }
            }
        } catch (MismatchedInputException upe) {
            upe.printStackTrace();
            resp.setStatus(400);
            ErrorResponse err = new ErrorResponse(400,"Bad Request: malformed user object found in request body");
            writer.write(mapper.writeValueAsString(err));
        }catch (Exception e){
            e.printStackTrace();
            resp.setStatus(500); //500 = internal server error
            ErrorResponse err = new ErrorResponse(500,"server: my bad.");
            writer.write(mapper.writeValueAsString(err));
        }
    }

}
