package com.revature.exceptions;

public class ResourceNotFoundException extends RuntimeException{
    public ResourceNotFoundException() {
        super("No resources found using the specified criteria.");
    }
    public ResourceNotFoundException(String msg){
        super(msg);
    }
}
