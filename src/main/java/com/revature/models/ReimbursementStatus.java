package com.revature.models;

/**
 * Enum for the status of DTO's
 */
public enum ReimbursementStatus {
    // values declared within enums are constants and are comma separated
    PENDING("Pending"),
    APPROVED("Approved"),
    DENIED("Denied"),
    CLOSED("Closed");

    private String reimbursementStaus;

    // enum constructors are implicitly private
    ReimbursementStatus(String name) {
        this.reimbursementStaus = name;
    }

    public static ReimbursementStatus getByName(String name) {

        for (ReimbursementStatus role : ReimbursementStatus.values()) {
            if (role.reimbursementStaus.equals(name)) {
                return role;
            }
        }
        return PENDING;
    }

    @Override
    public String toString() {
        return reimbursementStaus;
    }
}
