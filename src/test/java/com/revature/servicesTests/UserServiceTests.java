package com.revature.servicesTests;

import com.revature.exceptions.InvalidRequestException;
import com.revature.models.User;
import com.revature.repositories.UserRepository;
import com.revature.services.UserService;
import org.junit.*;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class UserServiceTests {
    @Mock
    private UserService sut;

    @Rule public MockitoRule mockitoRule = MockitoJUnit.rule();

    private String msg;
    private UserRepository mockUserRepo =  Mockito.mock(UserRepository.class);
    List<User> mockUsers = new ArrayList<>();


    @Before
    public void setup(){
        sut = new UserService();
        msg = "";
        mockUsers.add(new User("t1","password","troy","davis","troy1@gmail.com"));
        mockUsers.add(new User("t2","password","troy","davis","troy2@gmail.com"));
        mockUsers.add(new User("t3","password","troy","davis","troy3@gmail.com"));
        mockUsers.add(new User("t4","password","troy","davis","troy4@gmail.com"));
        mockUsers.add(new User("t5","password","troy","davis","troy5@gmail.com"));
    }

    @After
    public void authenticateTests(){
        sut = null;
        msg = null;
        mockUsers = new ArrayList<>();
    }

    @Test(expected = InvalidRequestException.class)
    public void testQuery() {
        sut =  new UserService();
        sut.authenticate("","");
    }

    @Test()
    public void getAllUsersTest() {
        sut =  new UserService();
        Assert.assertNotNull(sut.getAllUsers());
    }
    @Test()
    public void emailTest() {
        sut =  new UserService();
        Assert.assertTrue(sut.isEmailAvailable(""));
    }
    @Test(expected = InvalidRequestException.class)
    public void registerTest(){
        sut =  new UserService();
        sut.register(new User());
    }
    @Test(expected = InvalidRequestException.class)
    public void updateTest(){
        sut =  new UserService();
        sut.update(new User());
    }
    @Test(expected = InvalidRequestException.class)
    public void deleteTest(){
        sut =  new UserService();
        sut.deleteUserById(-9000);
    }
    @Test()
    public void validateTest(){
        sut =  new UserService();
        Assert.assertTrue("",sut.isUserValid(new User("troy","davis","t@g.co","password","td")));
    }

}
