package com.user;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "username",
        "isAdmin",
        "dateOfBirth",
        "email",
        "name",
        "password",
        "superpower"
})
public class User {

    @JsonProperty("username")
    private String username;
    @JsonProperty("isAdmin")
    private Boolean isAdmin;
    @JsonProperty("dateOfBirth")
    private String dateOfBirth;
    @JsonProperty("email")
    private String email;
    @JsonProperty("name")
    private String name;
    @JsonProperty("password")
    private String password;
    @JsonProperty("superpower")
    private String superpower;
    @JsonProperty("id")
    private Integer id;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    public User(String username, Boolean isAdmin, String dateOfBirth, String email, String name, String password, String superpower){
        setUsername(username);
        setIsAdmin(isAdmin);
        setDateOfBirth(dateOfBirth);
        setEmail(email);
        setName(name);
        setPassword(password);
        setSuperpower(superpower);
    }

    public User(Integer id, String username, Boolean isAdmin, String dateOfBirth, String email, String name, String password, String superpower){
        setId(id);
        setUsername(username);
        setIsAdmin(isAdmin);
        setDateOfBirth(dateOfBirth);
        setEmail(email);
        setName(name);
        setPassword(password);
        setSuperpower(superpower);
    }
    @JsonProperty("username")
    public String getUsername() {
        return username;
    }

    @JsonProperty("username")
    public void setUsername(String username) {
        this.username = username;
    }

    @JsonProperty("isAdmin")
    public Boolean getIsAdmin() {
        return isAdmin;
    }

    @JsonProperty("isAdmin")
    public void setIsAdmin(Boolean isAdmin) {
        this.isAdmin = isAdmin;
    }

    @JsonProperty("dateOfBirth")
    public String getDateOfBirth() {
        return dateOfBirth;
    }

    @JsonProperty("dateOfBirth")
    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    @JsonProperty("email")
    public String getEmail() {
        return email;
    }

    @JsonProperty("email")
    public void setEmail(String email) {
        this.email = email;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("password")
    public String getPassword() {
        return password;
    }

    @JsonProperty("password")
    public void setPassword(String password) {
        this.password = password;
    }

    @JsonProperty("superpower")
    public String getSuperpower() {
        return superpower;
    }

    @JsonProperty("superpower")
    public void setSuperpower(String superpower) {
        this.superpower = superpower;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
