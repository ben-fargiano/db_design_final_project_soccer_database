package com.example.springtemplate.models;

import javax.persistence.*;

@Table(name="leagues")
public enum League {
    English_Premier_League,
    EFL_Championship,
    La_Liga,
    Liga_MX,
    Serie_A,
    Bundesliga,
    Major_League_Soccer,
    International
}
