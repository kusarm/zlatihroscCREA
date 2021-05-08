DROP TABLE IF EXISTS Posest;
DROP TABLE IF EXISTS Sorta;
DROP TABLE IF EXISTS Delo;

CREATE TABLE public.Posest
(
    id_posest serial PRIMARY KEY,
    opis      VARCHAR(200)
);

CREATE TABLE public.Sorta
(
    id_sorta serial PRIMARY KEY,
    id_posest int4,
    opis      VARCHAR(200),
    FOREIGN KEY (id_posest) REFERENCES Posest(id_posest)
);

CREATE TABLE public.Delo
(
    id_delo serial PRIMARY KEY,
    id_sorta int4,
    hash      VARCHAR(200),
    opis      VARCHAR(200),
    FOREIGN KEY (id_sorta) REFERENCES Sorta(id_sorta)
);