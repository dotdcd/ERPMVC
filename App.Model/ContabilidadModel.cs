using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Model
{
    // All Models
    public class EmpresasModel
    {
        public string empresa_id { get; set; }
        public string empresa_razon_social { get; set; }
        public string empresa_direccion { get; set; }
        public string empresa_colonia { get; set; }
        public string empresa_ciudad_estado { get; set; }
        public string empresa_rfc { get; set; }
        public string empresa_telefono { get; set; }
        public string empresa_registro_patronal { get; set; }
        public string empresa_fecha_alta { get; set; }
        public string empresa_fecha_baja { get; set; }
        public string empresa_estatus_baja { get; set; }
        public string empresa_regimen_fiscal { get; set; }
        public string empresa_cp { get; set; }
        public bool ActivoChk { get; set; }
    }

    public class InversionesModel
    {
          public string inversion_id { get; set; }
          public string inversion_clave { get; set; }
          public string inversion_descripcion { get; set; }
          public string inversion_fecha_alta { get; set; }
          public string inversion_ultima_modificacion { get; set; }
          public string inversion_estatus_baja { get; set; }
          public string inversion_fecha_baja { get; set; }
          public bool ActivoChk { get; set; }
    }

    public class EmpleadosModel
    {
        public string empleado_id { get; set; }
        public string empleado_nombre { get; set; }
        public string empleado_paterno { get; set; }
        public string empleado_materno { get; set; }
        public string empleado_imss { get; set; }
        public string empleado_nacimiento { get; set; }
        public string empleado_entrada { get; set; }
        public string empleado_direccion { get; set; }
        public string empleado_telefono { get; set; }
        public string empleado_email { get; set; }
        public string empleado_centrodecostos_id { get; set; }
        public string empleado_puesto_id { get; set; }
        public string empleado_sueldo { get; set; }
        public string empleado_sueldo_imss { get; set; }
        public string empleado_cuenta_deposito { get; set; }
        public string empleado_cuenta_deposito_maquila { get; set; }
        public string empleado_periodo_id { get; set; }
        public string empleado_diario { get; set; }
        public string empleado_rfc { get; set; }
        public string empleado_curp { get; set; }
        public string empleado_empresa_id { get; set; }
        public string empleado_sexo_id { get; set; }
        public string empleado_estado_civil_id { get; set; }
        public string empleado_fecha_alta { get; set; }
        public string empleado_ultima_modificacion { get; set; }
        public string empleado_usuario { get; set; }
        public string empleado_password { get; set; }
        public string empleado_estatus_baja { get; set; }
        public string empleado_fecha_baja { get; set; }
        public string empleado_administrador { get; set; }
        public string empleado_actividad_tipo { get; set; }
        public string empleado_perfil_app { get; set; }
        public string usuario_modifico { get; set; }
        public string sucursal_id { get; set; }
        public string tipo_indirecto_id { get; set; }
        public string empleado_contacto_emergencia_nombre { get; set; }
        public string empleado_contacto_emergencia_telefono { get; set; }
        public bool ActivoChk { get; set; }
    }
}
