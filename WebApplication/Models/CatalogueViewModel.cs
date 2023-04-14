using System;
using System.Collections.Generic;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web;

namespace WebApplication.Models
{
    public class EdificioViewModel
    {
        public string id { get; set; }
        public string text { get; set; }
    }

    public class UnidadViewModel
    {
        public string id { get; set; }
        public string text { get; set; }
    }

    public class CerraduraViewModel
    {
        public int id { get; set; }
        public string text { get; set; }
    }

    public class DocumentoViewModel
    {
        public string id { get; set; }
        public string text { get; set; }
    }

    public class FingerPrintViewModel
    {
        public string lockid { get; set; }
        public string fingerprintId { get; set; }
        public string fingerprintName { get; set; }
        public string period { get; set; }
        public string status { get; set; }        
    }

    public class CardViewModel
    {
        public string lockid { get; set; }
        public string cardId { get; set; }
        public string cardNumber { get; set; }
        public string cardName { get; set; }
        public string period { get; set; }
        public string status { get; set; }
    }

    public class EstatusReporteViewModel
    {
        public string IdReporte { get; set; }
        public string FechaReporte { get; set; }
        public string Unidad { get; set; }
        public string Tipo { get; set; }
        public string Estatus { get; set; }
        public string Comentarios { get; set; }
        public string PathFoto { get; set; }
    }

    public class CambiarUnidadViewModel
    {
        public string idContrato { get; set; }        
        public string UserName { get; set; }


        [DataType(DataType.Text)]
        [Display(Name = "Edificio")]
        public string Edificio { get; set; }

        [DataType(DataType.Text)]
        [Display(Name = "Precio")]
        public string Precio { get; set; }

        [DataType(DataType.Text)]
        [Display(Name = "Unidad")]
        public string Unidad { get; set; }

        [DataType(DataType.Duration)]
        [Display(Name = "Duración")]
        public string Duracion { get; set; }

        [Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "EdificioRequerido")]
        [DataType(DataType.Text)]
        [Display(Name = "EdificioText")]
        public string EdificioText { get; set; }

        [Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "UnidadRequerida")]
        [DataType(DataType.Text)]
        [Display(Name = "UnidadText")]
        public string UnidadText { get; set; }

        [DataType(DataType.Text)]
        [Display(Name = "DuracionText")]
        public string DuracionText { get; set; }
    }

    public class DatosContratoViewModel
    {
        public string EsProfesionista { get; set; }
        public string UserName { get; set; }
        public string RFC { get; set; }
        public string CURP { get; set; }
        public string NombreAval { get; set; }
        public string Genero { get; set; }
        public string GeneroAval { get; set; }
        public string Nacionalidad { get; set; }
        public string NacionalidadAval { get; set; }
        public string Precio { get; set; }

        public string FirmaAval { get; set; }
        public string FirmaArrendatario { get; set; }

        [DataType(DataType.Text)]
        [Display(Name = "Edificio")]
        public string Edificio { get; set; }        

        [DataType(DataType.Text)]
        [Display(Name = "Unidad")]
        public string Unidad { get; set; }
                
        public string EdificioText { get; set; }        
        public string UnidadText { get; set; }

        public string arrendadora { get; set; }
        public string representante_legal { get; set; }
        public string no_escritura_publica_arrendadora { get; set; }
        public string no_libro { get; set; }
        public string fecha_constitucion { get; set; }
        public string titular_notaria { get; set; }
        public string no_notaria { get; set; }
        public string folio_mercantil_electronico { get; set; }
        public string control_interno { get; set; }
        public string fecha_registro { get; set; }
        public string no_escritura_publica_arrendadora_poder { get; set; }
        public string no_libro_poder { get; set; }
        public string fecha_constitucion_poder { get; set; }
        public string titular_notaria_poder { get; set; }
        public string no_notaria_poder { get; set; }
        public string folio_mercantil_electronico_poder { get; set; }
        public string control_interno_poder { get; set; }
        public string fecha_registro_poder { get; set; }
        public string rfc_arrendadora { get; set; }
        public string personas_departamento { get; set; }
        public string banco_cuenta { get; set; }
        public string numero_cuenta { get; set; }
        public string clabe { get; set; }
        public string nombre_cuenta { get; set; }
        public string deposito_garantia { get; set; }
        public string fecha_contrato { get; set; }
        public string nombre_testigo1 { get; set; }
        public string nombre_testigo2 { get; set; }
        public string duracion { get; set; }
        public string diaIni { get; set; }
        public string mesIni { get; set; }
        public string anioIni { get; set; }
        public string diaFin { get; set; }
        public string mesFin { get; set; }
        public string anioFin { get; set; }
        public string direccion1 { get; set; }
        public string direccion2 { get; set; }
        public string Sillas { get; set; }
        public string Escritorio { get; set; }
        public string Buro { get; set; }
        public string Base { get; set; }
        public string Colchon { get; set; }
        public string Tv { get; set; }
        public string MesaTv { get; set; }
        public string Sala { get; set; }
        public string Sanitario { get; set; }
        public string Lavabo { get; set; }
        public string Minisplit { get; set; }
        public string CajaSeguridad { get; set; }
        public string Amazon { get; set; }
        public string TuyaSmart { get; set; }
        public string Lutron { get; set; }
        public string domicilio_arrendadora { get; set; }
        public string fecha_firma { get; set; }
        public string diaFirma { get; set; }
        public string mesFirma { get; set; }
        public string anioFirma { get; set; }
        public string idContrato { get; set; }
        public string curpAval { get; set; }
        public string ineAval { get; set; }
        public string idArrendatario { get; set; }             
    }
}