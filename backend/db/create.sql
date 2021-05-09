
DROP TABLE IF EXISTS Sadje;
DROP TABLE IF EXISTS Delo;
DROP TABLE IF EXISTS Sorta;
DROP TABLE IF EXISTS Posest;

CREATE TABLE public.Posest
(
    id_posest serial PRIMARY KEY,
    sharp      VARCHAR(2000),
    opis      VARCHAR(2000)
);

CREATE TABLE public.Sorta
(
    id_sorta serial PRIMARY KEY,
    id_posest int4 not null,
    sharp      VARCHAR(2000),
    opis      VARCHAR(2000),
    kategorija      VARCHAR(2000),
    kolicina      VARCHAR(2000),
    posajeno      VARCHAR(2000),
    FOREIGN KEY (id_posest) REFERENCES Posest(id_posest)
);

CREATE TABLE public.Delo
(
    id_delo serial PRIMARY KEY,
    id_sorta int4,
    sharp      VARCHAR(2000),
    opis      VARCHAR(2000),
    datum      VARCHAR(2000),
    FOREIGN KEY (id_sorta) REFERENCES Sorta(id_sorta)
);

CREATE TABLE public.Sadje
(
    id_sadje serial PRIMARY KEY,
    id_sorta int4,
    sharp      VARCHAR(2000),
    opis      VARCHAR(2000),
    kolicina      VARCHAR(2000),
    FOREIGN KEY (id_sorta) REFERENCES Sorta(id_sorta)
);