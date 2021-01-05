DROP DATABASE IF EXISTS drafts_db;

CREATE DATABASE drafts_db;

\c drafts_db;

CREATE TABLE drafts (
    id SERIAL PRIMARY KEY,
    blue_pick1 text NOT NULL,
    blue_pick2 text NOT NULL,
    blue_pick3 text NOT NULL,
    blue_pick4 text NOT NULL,
    blue_pick5 text NOT NULL,
    red_pick1 text NOT NULL,
    red_pick2 text NOT NULL,
    red_pick3 text NOT NULL,
    red_pick4 text NOT NULL,
    red_pick5 text NOT NULL,
    blue_ban1 text NOT NULL,
    blue_ban2 text NOT NULL,
    blue_ban3 text NOT NULL,
    blue_ban4 text NOT NULL,
    blue_ban5 text NOT NULL,
    red_ban1 text NOT NULL,
    red_ban2 text NOT NULL,
    red_ban3 text NOT NULL,
    red_ban4 text NOT NULL,
    red_ban5 text NOT NULL
);