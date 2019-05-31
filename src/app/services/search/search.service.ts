import { Injectable } from '@angular/core';
import { Parte } from 'src/app/models/parte.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  Partes:Parte[] =[
    {
      Codigo: "KT",
      Numero: 123,
      Modulo: "FC",
      Objeto: "FCRMVH",
      Version: 430,
      Fecha_de_liberacion: "2019-03-01",
      Descripcion:`Aplicación
                    Exportacion de transacciones (INIMTRSXWIZ).

                    Al elegir una interfaz y tildarla, el sistema no habilita los campos VIRT_TXTPAT ni VIRT_TXTNAM en el paso "Ingreso del tipo de transaccion" (INIMTRSX02).

                    Esto no permite avanzar en el proceso, dado que el sistema siempre da el error de "Archivo inexistente".

                    La version de la dll IN_WW_EXPTRA.dll es la 3.7.0.201
                    `
    },
    {
      Codigo: "AH",
      Numero: 132,
      Modulo: "VT",
      Objeto: "VTMCLH",
      Version: 370,
      Fecha_de_liberacion: "2018-05-21",
      Descripcion:`Registración de Notas (EDRNVH)
                    Problema
                    Cuando se utiliza el campo EDTTCH_PROMED en "Comun" y el campo EDTEVI_CNDDCM en 0,5 al registrar las notas el sistema no calcula el Promedio y lo deja en 0.`
    },
    {
      Codigo: "GR",
      Numero: 1141,
      Modulo: "CO",
      Objeto: "COTCIH",
      Version: 410,
      Fecha_de_liberacion: "2016-02-7",
      Descripcion:`De: Claudio Trosch - Intercap S.R.L.
                    Fecha: 20 de febrero de 2014, 9:14
                    Asunto: Soporte magnético - Retenciones IVA
                    Para: Soporte Softland
                    Cc: Sandra Saucedo

                    Buen día. Existe un problema con el proceso soporte magnético de retenciones de iva y el reporte para exportar el txt.
                    Al correr el proceso, se debe indicar el rango de fechas a procesar, pero cuando se ejecuta el reporte (DGB_IVA_RPR ) trae cualquier dato de otras fechas. Además el reporte en cuestión tampoco tiene el filtro de las fechas.
                    Otro problema con el reporte es que no trae la cuit para las retenciones que vienen de los recibos, lo cual implica que tengamos que buscar manualmente uno por uno a ver a que cuit pertenece.
                    Necesito por favor solucionar el problema hoy a mas tardar mañana.
                    Gracias `
    }
  ];

  Modulos:any[] =[
    {   Codigo: "AG",Descripcion: "Gestión Agropecuaria"},
    {   Codigo: "AU",Descripcion: "Autorizaciones"},
    {   Codigo: "CB",Descripcion: "Conciliación Bancaria"},
    {   Codigo: "CF",Descripcion: "Cash Flow"},
    {   Codigo: "CG",Descripcion: "Contabilidad"},
    {   Codigo: "CJ",Descripcion: "Tesorería"},
    {   Codigo: "CO",Descripcion: "Compras"},
    {   Codigo: "CP",Descripcion: "Control Presupuestario"},
    {   Codigo: "CT",Descripcion: "Costos"},
    {   Codigo: "CV",Descripcion: "Facturación de Contratos"},
    {   Codigo: "DG",Descripcion: "Impuestos"},
    {   Codigo: "DP",Descripcion: "Depuraciones"},
    {   Codigo: "DY",Descripcion: "Tabla de Migracion con el Sistema America"},
    {   Codigo: "EC",Descripcion: "E-Commerce"},
    {   Codigo: "ED",Descripcion: "Gestión Educativa"},
    {   Codigo: "EO",Descripcion: "Análisis de Gestión Financiera (EOAF)"},
    {   Codigo: "FC",Descripcion: "Facturación"},
    {   Codigo: "GC",Descripcion: "Gestión Comercial"},
    {   Codigo: "GP",Descripcion: "Gestión de Proyectos"},
    {   Codigo: "GR",Descripcion: "General"},
    {   Codigo: "IG",Descripcion: "Informes Gerenciales"},
    {   Codigo: "IM",Descripcion: "Importaciones"},
    {   Codigo: "IN",Descripcion: "Interfases"},
    {   Codigo: "ME",Descripcion: "Mantenimiento de Equipos y Vehículos"},
    {   Codigo: "PD",Descripcion: "Producción"},
    {   Codigo: "PM",Descripcion: "Administración de Proyectos"},
    {   Codigo: "PV",Descripcion: "Proveedores"},
    {   Codigo: "RH",Descripcion: "Recursos Humanos"},
    {   Codigo: "RP",Descripcion: "Repartos"},
    {   Codigo: "RV",Descripcion: "Activo Fijo"},
    {   Codigo: "SJ",Descripcion: "Sueldos y Jornales"},
    {   Codigo: "SP",Descripcion: "Seguimiento de Proyectos"},
    {   Codigo: "ST",Descripcion: "Stock"},
    {   Codigo: "TR",Descripcion: "Transferencias"},
    {   Codigo: "VT",Descripcion: "Clientes"},
    {   Codigo: "WA",Descripcion: "Autorización"},
    {   Codigo: "WG",Descripcion: "Wizard Generator"}
  ];

  Objetos:any[] = [
    {   Codigo: "ACTSTWIZ", Descripcion: "Contabilización de Costos", Modulo: "ST"},
    {   Codigo: "ADMIN - GRAERH", Descripcion: "Entidad Relacional", Modulo: "GR"},
    {   Codigo: "AE_DEPURACION", Descripcion: "AE - Depuración de Compras", Modulo: "AE"},
    {   Codigo: "AE_DEPURACIONFC", Descripcion: "AE - Depuración de Facturación", Modulo: "AE"},
    {   Codigo: "AG_PEN_ANU_EXE", Descripcion: "AG - Pendientes de anulación (Grupo)", Modulo: "AE"},
    {   Codigo: "AG_PEN_ANU_PAR", Descripcion: "AG - Pendientes de anulación (Grupo)", Modulo: "AG"},
    {   Codigo: "AG_PEN_COS", Descripcion: "AG - Pendientes de cosecha", Modulo: "AG"},
    {   Codigo: "AG_PEN_DET", Descripcion: "AG - Pendientes de siembra (Detalle)", Modulo: "AG"},
    {   Codigo: "AG_PEN_GEN", Descripcion: "AG - Pendientes de generación de consumos", Modulo: "AG"},
    {   Codigo: "AG_PEN_GRP", Descripcion: "AG - Pendientes de siembra (Grupo)", Modulo: "AE"},
    {   Codigo: "AG_PEN_INF", Descripcion: "AG - Pendientes para informes de servicio de compras (Sin req. en AG)", Modulo: "AG"},
    {   Codigo: "AG_PEN_INF_FOR", Descripcion: "AG - Pendientes para informes de servicio de compras (Con req. en AG)", Modulo: "AG"},
    {   Codigo: "AG_PEN_ORD_DET", Descripcion: "AG - Pendientes de simulación (Detalle)", Modulo: "AG"},
    {   Codigo: "AG_PEN_ORD_GRP", Descripcion: "AG - Planes de siembra (Grupo)", Modulo: "AG"},
    {   Codigo: "AG_PEN_REQ", Descripcion: "AG - Pendientes para requerimientos de compras", Modulo: "AG"},
    {   Codigo: "AG_PEN_SIE_DET", Descripcion: "AG - Pendientes de siembra (Detalle)", Modulo: "AG"},
    {   Codigo: "AG_PEN_SIE_GRP", Descripcion: "AG - Pendientes de siembra (Grupo)", Modulo: "AG"},
    {   Codigo: "AG_PEN_SIM_DET", Descripcion: "AG - Pendientes de simulación (Detalle)", Modulo: "AG"},
    {   Codigo: "AG_PEN_SIM_GRP", Descripcion: "AG - Pendientes de simulación (Grupo)", Modulo: "AG"},
    {   Codigo: "AG_STK_DET", Descripcion: "AG - Pendientes de productos (Detalle)", Modulo: "AG"},
    {   Codigo: "AG_STK_GRP", Descripcion: "AG - Pendientes de productos (Grupo)", Modulo: "AG"},
    {   Codigo: "AGC_CBH_LST", Descripcion: "AG - Comprobantes de agro", Modulo: "AG"},
    {   Codigo: "AGCCBH", Descripcion: "Comprobantes de agro", Modulo: "AG"},
    {   Codigo: "AGCORMVHWIZ", Descripcion: "Generación de requerimientos de compras", Modulo: "AG"},
    {   Codigo: "AGINFSERWIZ", Descripcion: "Generación de informes de servicios de compras", Modulo: "AG"},
    {   Codigo: "AGM_CAH_LST", Descripcion: "AG - Establecimientos", Modulo: "AG"},
    {   Codigo: "AGMCAH", Descripcion: "Maestro de Establecimientos", Modulo: "AG"},
    {   Codigo: "AGPARAMWIZ", Descripcion: "Definición de parametros de gestión agropecuaria", Modulo: "AG"},
    {   Codigo: "AGR_APL_LST", Descripcion: "AG - Aplicaciones de Agro", Modulo: "AG"},
    {   Codigo: "AGR_MVH_LST", Descripcion: "AG - Movimientos de Agro", Modulo: "AG"},
    {   Codigo: "AGR_MVH_PCI", Descripcion: "AG - Ordenes de siembra pendientes de cierre (Grupo)", Modulo: "AG"},
    {   Codigo: "AGR_MVH_PRV", Descripcion: "AG - Ordenes de siembra finalizadas (Grupo)", Modulo: "AG"},
    {   Codigo: "AGRMVH", Descripcion: "Registración de Gestión Agropecuaria", Modulo: "AG"},
    {   Codigo: "AGRMVHAPLUPDWIZ", Descripcion: "Modificación de aplicaciones de Gestión Agropecuaria", Modulo: "AG"},
    {   Codigo: "AGRMVHUPD", Descripcion: "Modificación de comprobantes de Gestión Agropecuaria", Modulo: "AG"},
    {   Codigo: "AGRMVHWIZ", Descripcion: "Registración de gestión agropecuaria", Modulo: "AG"},
    {   Codigo: "AGT_ACT_LST", Descripcion: "AG - Labores", Modulo: "AG"},
    {   Codigo: "AGT_ATH_LST", Descripcion: "AG - Atributos", Modulo: "AG"},
    {   Codigo: "AGT_CAH_LST", Descripcion: "AG - Campañas", Modulo: "AG"},
    {   Codigo: "AGT_CIH_LST", Descripcion: "AG - Circuitos de agro", Modulo: "AG"},
    {   Codigo: "AGT_CIR_LST", Descripcion: "AG - Códigos de circuitos de agro", Modulo: "AG"},
    {   Codigo: "AGT_FOH_LST", Descripcion: "AG - Composición de Recetas", Modulo: "AG"},
    {   Codigo: "AGT_FOI_LST", Descripcion: "AG - Composición de receta", Modulo: "AG"},
    {   Codigo: "AGT_FOR_LST", Descripcion: "AG - Tipo de Recetas", Modulo: "AG"},
    {   Codigo: "AGT_REH_LST", Descripcion: "AG - Responsables", Modulo: "AG"},
    {   Codigo: "AGT_TCH_LST", Descripcion: "AG - Tipo de Establecimiento", Modulo: "AG"},
    {   Codigo: "AGT_TEH_LST", Descripcion: "AG - Tipo de Explotación", Modulo: "AG"},
    {   Codigo: "AGT_VAR_LST", Descripcion: "AG - Variedad", Modulo: "AG"},
    {   Codigo: "AGTACT", Descripcion: "Labores", Modulo: "AG"},
    {   Codigo: "AGTATH", Descripcion: "Atributos", Modulo: "AG"}
  ];


  constructor() { }

  getmodulos():any{
    return this.Modulos
  }

  getobjetosconfiltro(modulo:string):any{
    let Resultados:any[]=[];
    let Codigoobjeto:string;
    let filtro:string = modulo.toUpperCase();

      for (let i = 0; i < this.Objetos.length; i++) {
          Codigoobjeto = this.Objetos[i].Modulo.toUpperCase();
          //console.log(NombreHeroe.indexOf(filtro));
          if (Codigoobjeto.indexOf(filtro) >= 0) {
            Resultados.push(this.Objetos[i]);
          };
      };
      return Resultados;
  }
  getpartesconfiltro(termino:string):any{
    let Resultados:any[]=[];
    let Codigoparte:string;
    let filtro:string = termino.toUpperCase();

      for (let i = 0; i < this.Partes.length; i++) {
          Codigoparte = this.Partes[i].Codigo.toUpperCase();
          //console.log(NombreHeroe.indexOf(filtro));
          if (Codigoparte.indexOf(filtro) >= 0) {
            Resultados.push(this.Partes[i]);
          };
      };
      return Resultados;
  };
}
