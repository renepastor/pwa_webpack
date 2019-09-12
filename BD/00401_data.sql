/*aut: renepastor@gmail.com
  fec: 19/06/2017
*/
begin;
-------*****PARAMETROS*****
--INSERT INTO nucleo.parametros (campo,valor,sistema,descripcion,usuario)
--VALUES('PER-VACA-VAL','9','RRHH', 'PERIODOS VALIDOS DE VACACION',1);

-------******TBL TIPOS******--
INSERT INTO nucleo.tbl_tipos(padre_id,nombre,valor,descripcion,ayuda,validador,usuario) VALUES
(1011100000000001,'UNIDAD MEDIDAD','UNIDAD_MEDIDA','UNIDAD DE MEDIDA','','',1);
INSERT INTO nucleo.tbl_tipos(padre_id,nombre,valor,descripcion,ayuda,validador,usuario) VALUES
(nucleo.fn_tipo_nombre_id('UNIDAD MEDIDAD'),'UN','UN','UNIDAD','','',1);
INSERT INTO nucleo.tbl_tipos(padre_id,nombre,valor,descripcion,ayuda,validador,usuario) VALUES
(nucleo.fn_tipo_nombre_id('UNIDAD MEDIDAD'),'M','M','METROS','','',1);
INSERT INTO nucleo.tbl_tipos(padre_id,nombre,valor,descripcion,ayuda,validador,usuario) VALUES
(nucleo.fn_tipo_nombre_id('UNIDAD MEDIDAD'),'M2','M2','METRO CUADRADO','','',1);
INSERT INTO nucleo.tbl_tipos(padre_id,nombre,valor,descripcion,ayuda,validador,usuario) VALUES
(nucleo.fn_tipo_nombre_id('UNIDAD MEDIDAD'),'M3','M3','METRO CUBICO','','',1);

-------******ROLES******--
insert into nucleo.roles (sistema, nombre, descripcion,usuario) values ('PRECIO_UNITARIO', 'PRECIO_UNITARIO', 'PRECIO_UNITARIO',1);

-------******ENLACES******--
insert into nucleo.enlaces (padre_id,nivel,orden,nombre,imagen,ruta,ayuda,usuario) values 
(1011100000000001,1,2,'PRECIO UNITARIO','fa-linode', 'javascript:void(0)', '',1);
insert into nucleo.enlaces (padre_id,nivel,orden,nombre,imagen,ruta,ayuda,usuario) values 
((SELECT id FROM nucleo.enlaces WHERE nombre='PRECIO UNITARIO'),2,20,'Precios nucleos','fa-linode', '#precioUnitario', '',1);
insert into nucleo.enlaces (padre_id,nivel,orden,nombre,imagen,ruta,ayuda,usuario) values 
((SELECT id FROM nucleo.enlaces WHERE nombre='PRECIO UNITARIO'),2,20,'Admin Equipos','fa-truck', '#equipos', '',1);
insert into nucleo.enlaces (padre_id,nivel,orden,nombre,imagen,ruta,ayuda,usuario) values 
((SELECT id FROM nucleo.enlaces WHERE nombre='PRECIO UNITARIO'),2,20,'Admin Mano de Obra','fa-male', '#manoObras', '',1);
insert into nucleo.enlaces (padre_id,nivel,orden,nombre,imagen,ruta,ayuda,usuario) values 
((SELECT id FROM nucleo.enlaces WHERE nombre='PRECIO UNITARIO'),2,20,'Admin Material','fa-area-chart', '#materiales', '',1);
-------******MENUS******--
insert into nucleo.menues (rol_id, enla_id,usuario) values 
((SELECT id FROM nucleo.roles WHERE nombre='PRECIO_UNITARIO'),(SELECT id FROM nucleo.enlaces WHERE nombre='PRECIO UNITARIO'),1),
((SELECT id FROM nucleo.roles WHERE nombre='PRECIO_UNITARIO'),(SELECT id FROM nucleo.enlaces WHERE nombre='Admin Equipos'),1),
((SELECT id FROM nucleo.roles WHERE nombre='PRECIO_UNITARIO'),(SELECT id FROM nucleo.enlaces WHERE nombre='Admin Mano de Obra'),1),
((SELECT id FROM nucleo.roles WHERE nombre='PRECIO_UNITARIO'),(SELECT id FROM nucleo.enlaces WHERE nombre='Admin Material'),1),
((SELECT id FROM nucleo.roles WHERE nombre='PRECIO_UNITARIO'),(SELECT id FROM nucleo.enlaces WHERE nombre='Precios nucleos'),1);

-------******USUARIO ROL******--
--INSERT INTO nucleo.usr_roles(user_id,rol_id,expira,permiso,usuario) VALUES
--(1001000000016110,(SELECT id FROM nucleo.roles WHERE nombre='PRECIO_UNITARIO'),'2050-01-01','{}','rpmamani');

insert into nucleo.usuarios(pers_id, cuenta, alias, clave,usuario) values 
(1001000000016140, 'jtorres', 'Josue Torrez', crypt('123', gen_salt('bf')), 'rpmamani');
INSERT INTO nucleo.usr_roles(user_id,rol_id,expira,permiso,usuario) VALUES
(1001000000016140,(SELECT id FROM nucleo.roles WHERE nombre='PRECIO_UNITARIO'),'2050-01-01','{}','rpmamani');


insert into nucleo.usuarios(pers_id, cuenta, alias, clave,usuario) values 
(1001000000016141, 'joaquin', 'Joaquib', crypt('123', gen_salt('bf')), 'rpmamani');
INSERT INTO nucleo.usr_roles(user_id,rol_id,expira,permiso,usuario) VALUES
(1001000000016141,(SELECT id FROM nucleo.roles WHERE nombre='PRECIO_UNITARIO'),'2050-01-01','{}','rpmamani');

/*
-------******DOMOTICA******--
SELECT setval('unitario.ambientes_id_seq', 1011100000000000);
INSERT INTO nucleo.ambientes(descripcion) VALUES('Entrada');
INSERT INTO nucleo.ambientes(descripcion) VALUES('Central');
INSERT INTO nucleo.ambientes(descripcion) VALUES('Interior');

SELECT setval('unitario.dispositivos_id_seq', 1011100000000000);
INSERT INTO nucleo.dispositivos(ambiente_id, tipo_dispositivo_id, valor, usuario)VALUES(1011100000000001, nucleo.fn_tipo_nombre_id('LUZ'),'false', 'rpmamani');
INSERT INTO nucleo.dispositivos(ambiente_id, tipo_dispositivo_id, estado_dispositivo, valor, usuario)VALUES(1011100000000002, nucleo.fn_tipo_nombre_id('LUZ'), true,'false', 'rpmamani');
INSERT INTO nucleo.dispositivos(ambiente_id, tipo_dispositivo_id, valor, usuario)VALUES(1011100000000003, nucleo.fn_tipo_nombre_id('LUZ'),'false', 'rpmamani');

SELECT setval('unitario.user_dispositivos_id_seq', 1011100000000000);
INSERT INTO nucleo.user_dispositivos(dispositivo_id, persona_id)VALUES(1011100000000001, 1001000000016110);
INSERT INTO nucleo.user_dispositivos(dispositivo_id, persona_id)VALUES(1011100000000002, 1001000000016110);
INSERT INTO nucleo.user_dispositivos(dispositivo_id, persona_id)VALUES(1011100000000003, 1001000000016110);
INSERT INTO nucleo.user_dispositivos(dispositivo_id, persona_id)VALUES(1011100000000001, 1001000000016140);
INSERT INTO nucleo.user_dispositivos(dispositivo_id, persona_id)VALUES(1011100000000002, 1001000000016140);
INSERT INTO nucleo.user_dispositivos(dispositivo_id, persona_id)VALUES(1011100000000003, 1001000000016140);
INSERT INTO nucleo.user_dispositivos(dispositivo_id, persona_id)VALUES(1011100000000001, 1001000000016141);
INSERT INTO nucleo.user_dispositivos(dispositivo_id, persona_id)VALUES(1011100000000002, 1001000000016141);
INSERT INTO nucleo.user_dispositivos(dispositivo_id, persona_id)VALUES(1011100000000003, 1001000000016141);
*/

commit;

    