package com.revature.servlet;

import com.revature.util.RequestViewHelper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Main servlet for handling view requests. only responds to GET requests
 */
@WebServlet("*.view")
public class ViewServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String nextView = new RequestViewHelper().process(req);
        req.getRequestDispatcher(nextView).forward(req, resp);
    }
}
