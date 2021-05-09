
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

CREATE TABLE public.Hashionary
(
    id_hashionary serial PRIMARY KEY,
    id_sorta      int4,
    sharp      VARCHAR(2000)
);

insert into Hashionary (id_sorta, sharp) values (1, '112');
insert into Hashionary (id_sorta, sharp) values (1, '113');



insert into posest (opis) values ('ŠentCrea');
insert into posest (opis) values ('Novo Besto');
insert into posest (opis) values ('Piran');

insert into sorta (id_posest, opis, kategorija, kolicina, posajeno) values (1, 'Jonagold', 'Jabolko', '300', '1987-05-02');
insert into sorta (id_posest, opis, kategorija, kolicina, posajeno) values (1, 'Topaz', 'Jabolko', '100', '1990-06-05');
insert into sorta (id_posest, opis, kategorija, kolicina, posajeno) values (1, 'Majda', 'Jabolko', '200', '1990-06-15');
insert into sorta (id_posest, opis, kategorija, kolicina, posajeno) values (1, 'Carjevič', 'Jabolko', '500', '1998-07-03');

insert into delo (id_sorta, opis, datum) values (1, 'Obiranje', '2020-09-15');
insert into delo (id_sorta, opis, datum) values (1, 'Škropljenje', '2020-06-15');
insert into delo (id_sorta, opis, datum) values (1, 'Obrezovanje', '2020-04-15');

insert into delo (id_sorta, opis, datum) values (2, 'Obiranje', '2020-09-01');
insert into delo (id_sorta, opis, datum) values (2, 'Obrezovanje', '2020-04-10');
insert into delo (id_sorta, opis, datum) values (2, 'Cepljenje', '2020-04-05');

insert into delo (id_sorta, opis, datum) values (3, 'Obiranje', '2020-10-01');
insert into delo (id_sorta, opis, datum) values (3, 'Gnojenje', '2020-07-12');
insert into delo (id_sorta, opis, datum) values (3, 'Obrezovanje', '2020-05-01');

insert into delo (id_sorta, opis, datum) values (4, 'Obiranje', '2020-09-20');
insert into delo (id_sorta, opis, datum) values (4, 'Škropljenje', '2020-07-15');
insert into delo (id_sorta, opis, datum) values (4, 'Obrezovanje', '2020-04-12');

insert into sadje (id_sorta, kolicina, sharp) values (1, '500 kg', '111');
insert into sadje (id_sorta, kolicina, sharp) values (2, '750 kg', '222');
insert into sadje (id_sorta, kolicina, sharp) values (3, '600 kg', '333');
insert into sadje (id_sorta, kolicina, sharp) values (4, '600 kg', '444');