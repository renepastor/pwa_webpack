/*aut: renepastor@gmail.com
  fec: 19/06/2017
*/
begin;

create table nucleo.materiales (
  id bigserial primary key,
  descripcion dtexto,
  codigo dtexto2,
  precio_unitario dmoneda,
  unidad_medida dtexto,
  clasificador dtexto2,
  fecha_inicio dfecha,
  fecha_fin dfecha2,
  estado destado,
  usuario duser,
  editado dfechahora default now()
);

create table nucleo.mano_obras (
  id bigserial primary key,
  descripcion dtexto,
  codigo dtexto2,
  precio_unitario dmoneda,
  unidad_medida dtexto,
  clasificador dtexto2,
  fecha_inicio dfecha,
  fecha_fin dfecha2,
  estado destado,
  usuario duser,
  editado dfechahora default now()
);

create table nucleo.equipos (
  id bigserial primary key,
  descripcion dtexto,
  codigo dtexto2,
  precio_unitario dmoneda,
  unidad_medida dtexto,
  clasificador dtexto2,
  fecha_inicio dfecha,
  fecha_fin dfecha2,
  estado destado,
  usuario duser,
  editado dfechahora default now()
);

create table nucleo.analisis (
  id bigserial primary key,
  descripcion_item dtexto,
  codigo dtexto2,
  unidad dtexto2,
  fecha_emision dfecha,
  fecha_consolidado dfecha2,
  estado destado,
  usuario duser,
  editado dfechahora default now()
);

create table nucleo.analisis_materiales(
  id bigserial primary key,
  analisis_id dllave,
  material_id dllave,
  unidad_medida dtexto,
  cantidad dmoneda,
  precio_unitario dmoneda,
  precio_total dmoneda,
  estado destado,
  usuario duser,
  editado dfechahora default now()
);

create table nucleo.analisis_mano_obras (
  id bigserial primary key,
  analisis_id dllave,
  mano_obra_id dllave,
  unidad_medida dtexto,
  cantidad dmoneda,
  precio_unitario dmoneda,
  precio_total dmoneda,
  estado destado,
  usuario duser,
  editado dfechahora default now()
);

create table nucleo.analisis_equipos (
  id bigserial primary key,
  analisis_id dllave,
  equipo_id dllave,
  unidad_medida dtexto,
  cantidad dmoneda,
  precio_unitario dmoneda,
  precio_total dmoneda,
  porcentaje_productivo dmoneda2,
  precio_inproductivo dmoneda2,
  estado destado,
  usuario duser,
  editado dfechahora default now()
);



commit;
