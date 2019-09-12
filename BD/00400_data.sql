/*aut: renepastor@gmail.com
  fec: 19/06/2017
*/
begin;

-------******ENLACES******--
SELECT setval('nucleo.enlaces_id_seq', 1011100000000000);

insert into nucleo.enlaces (padre_id,nivel,orden,nombre,imagen,ruta,ayuda,usuario) values 
(1011100000000001,1,2,'MENU','fa-bars', '', '',1011100000000001);

-------******* PARAMETROS *****----
SELECT setval('nucleo.parametros_id_seq', 1011100000000000);
INSERT INTO nucleo.parametros (campo,valor,sistema,descripcion,usuario)
VALUES('TIME-SESSION','30','SESSION', 'TIEMPO DE SESSION DEL USUARIO',1011100000000001);

-------******* TBL TIPOS *****----
SELECT setval('nucleo.tbl_tipos_id_seq', 1011100000000000);
INSERT INTO nucleo.tbl_tipos(padre_id,nombre,valor,descripcion,ayuda,validador,usuario) VALUES
(1011100000000001,'--','0','Inicio','Es el origen de la tabla','null',1);

-------******PROCESO******--
SELECT setval('nucleo.procesos_id_seq', 1011100000000000);
INSERT INTO nucleo.procesos(proceso,codigo,usuario) VALUES
('Correspondencia','CORR',1);

-------******ACTIVIDAD******--
SELECT setval('nucleo.actividades_id_seq', 1011100000000000);
INSERT INTO nucleo.actividades(proceso_id,actividad,orden,url,imagen,duracion,destino,usuario) VALUES
(1011100000000001,'Crear Corresp',0,'/corresp/index.html','fa-folder-open',8,'{"url":"./tem.html", "fn":"function(res){return (res.nombre)}"}',1);

commit;

    