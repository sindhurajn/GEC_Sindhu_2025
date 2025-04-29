package com.profileform.ProfileForm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.profileform.ProfileForm.model.Profile;

import java.util.ArrayList;
import java.util.List;

@Controller
public class ProfileController {

    private List<Profile> profiles = new ArrayList<>();

    @GetMapping("/profile")
    public String showForm(Model model) {
        model.addAttribute("profile", new Profile());
        model.addAttribute("profiles", profiles);
        return "profile";
    }

    @PostMapping("/profile")
    public String submitForm(@ModelAttribute Profile profile, Model model) {
        profiles.add(profile);
        return "redirect:/profile";
    }

    @PostMapping("/profile/delete")
    public String deleteProfile(@RequestParam("index") int index) {
        if (index >= 0 && index < profiles.size()) {
            profiles.remove(index);
        }
        return "redirect:/profile";
    }
}
