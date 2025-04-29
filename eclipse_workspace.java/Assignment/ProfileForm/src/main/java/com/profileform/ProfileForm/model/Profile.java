package com.profileform.ProfileForm.model;


public class Profile {
    private String name;
    private String gender;
    private String color;
    private int fontSize;

    public Profile() {}

    public Profile(String name, String gender, String color, int fontSize) {
        this.name = name;
        this.gender = gender;
        this.color = color;
        this.fontSize = fontSize;
    }

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }

    public int getFontSize() { return fontSize; }
    public void setFontSize(int fontSize) { this.fontSize = fontSize; }
}
