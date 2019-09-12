/*aut: renepastor@gmail.com
  fec: 19/06/2017
*/
begin;


--alter table only nucleo.ambientes add foreign key (persona_id) references nucleo.usuarios(pers_id);
alter table only nucleo.analisis_materiales add foreign key (analisis_id) references nucleo.analisis(id);
alter table only nucleo.analisis_materiales add foreign key (material_id) references nucleo.materiales(id);

alter table only nucleo.analisis_mano_obras add foreign key (analisis_id) references nucleo.analisis(id);
alter table only nucleo.analisis_mano_obras add foreign key (mano_obra_id) references nucleo.mano_obras(id);

alter table only nucleo.analisis_equipos add foreign key (analisis_id) references nucleo.analisis(id);
alter table only nucleo.analisis_equipos add foreign key (equipo_id) references nucleo.equipos(id);




commit;

