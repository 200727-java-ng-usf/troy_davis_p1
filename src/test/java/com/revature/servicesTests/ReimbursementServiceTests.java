package com.revature.servicesTests;

import com.revature.exceptions.InvalidRequestException;
import com.revature.models.Reimbursement;
import com.revature.services.ReimbursementService;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ReimbursementServiceTests {
    private ReimbursementService sut;

    @Before
    public void setup(){
        sut = new ReimbursementService();
    }

    @After
    public void tearDown(){
        sut = null;
    }

    @Test
    public void getAllReimbTest(){
        Assert.assertNotNull(sut.getAllReimb());
    }
    @Test(expected = InvalidRequestException.class)
    public void getReimbByUserIdTest(){
        sut.getReimbByUserId(-9999);
    }
    @Test(expected = InvalidRequestException.class)
    public void getReimbByTypeTest(){
        sut.getReimbByType(-9999);
    }
    @Test(expected = InvalidRequestException.class)
    public void getReimbByStatusTest(){
        sut.getReimbByStatus(-9999);
    }
    @Test(expected = InvalidRequestException.class)
    public void saveTest(){
        sut.save(new Reimbursement());
    }
    @Test(expected = InvalidRequestException.class)
    public void updateTest(){
        sut.updateEMP(new Reimbursement());
    }
    @Test(expected = InvalidRequestException.class)
    public void approveTest(){
        sut.approve(-100,6);
    }
    @Test(expected = InvalidRequestException.class)
    public void denyTest(){
        sut.deny(-100,-100);
    }
}
