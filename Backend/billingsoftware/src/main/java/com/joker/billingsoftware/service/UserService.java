package com.joker.billingsoftware.service;

import com.joker.billingsoftware.io.UserRequest;
import com.joker.billingsoftware.io.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse createUser(UserRequest request);

    String getUserRole(String email);

    List<UserResponse> readUsers();

    void deleteUser(String id);
}
