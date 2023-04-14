using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Model
{
    // Statics Models
    public class PTModel
    {
        public string proveedortipo_id { get; set; }
        public string proveedortipo_descripcion { get; set; }
    }

    public class SucursalesModel
    {
        public string sucursal_id { get; set; }
        public string sucursal_nombre { get; set; }
        public string sucursal_estatus_baja { get; set; }
        public bool ActivoChk { get; set; }
    }

    // All Models


    public class MarcasModel
    {
        public string marca_id { get; set; }
        public string marca_descripcion { get; set; }
        public string marca_fecha_alta { get; set; }
        public string marca_ultima_modificacion { get; set; }
        public string marca_fecha_baja { get; set; }
        public string marca_estatus_baja { get; set; }
        public bool ActivoChk { get; set; }
    }

    public class ProveedoresModel
    {
        public string proveedor_id { get; set; }
        public string proveedor_razon_social { get; set; }
        public string proveedor_contacto { get; set; }
        public string proveedor_contacto_email { get; set; }
        public string proveedor_telefono { get; set; }
        public string proveedor_direccion { get; set; }
        public string proovedor_rfc { get; set; }
        public string proveedor_web { get; set; }
        public string proveedor_usuario_password { get; set; }
        public string proveedor_dias_credito { get; set; }
        public string proveedor_limite_credito { get; set; }
        public string proveedor_tipo_id { get; set; }
        public string proveedor_fecha_alta { get; set; }
        public string proveedor_fecha_baja { get; set; }
        public string proveedor_ultima_modificacion { get; set; }
        public string proveedor_estatus_baja { get; set; }
        public bool ActivoChk { get; set; }
    }

    public class PMarcaModel
    { 
        public string marca { get; set; }
        public string proveedor { get; set; }
    }

    public class CablesModel
    {
        public string cable_id { get; set; }
        public string clave { get; set; }
        public string descripcion { get; set; }
        public string cable_estatus_baja { get; set; }
        public string cable_fecha_baja { get; set; }
        public bool ActivoChk { get; set; }
    }

    public class ClientesModel
    {
        public string cliente_id { get; set; }
        public string cliente_razon_social { get; set; }
        public string cliente_rfc { get; set; }
        public string cliente_calle { get; set; }
        public string cliente_numero { get; set; }
        public string cliente_codigo_postal { get; set; }
        public string cliente_colonia { get; set; }
        public string cliente_municipio { get; set; }
        public string cliente_estado { get; set; }
        public string cliente_telefono { get; set; }
        public string cliente_email { get; set; }
        public string cliente_contacto { get; set; }
        public string cliente_cobranza { get; set; }
        public string cliente_fecha_alta { get; set; }
        public string cliente_fecha_baja { get; set; }
        public string cliente_estatus_baja { get; set; }
        public string cliente_trafico { get; set; }
        public string cliente_regimen_fiscal { get; set; }
        public bool ActivoChk { get; set; }
    }

    public class DisciplinasModel
    {
        public string familia_id { get; set; }
        public string familia_descripcion { get; set; }
        public string familia_clave { get; set; }
        public string familia_estatus_baja { get; set; }
        public string familia_fecha_alta { get; set; }
        public string familia_fecha_baja { get; set; }
        public string familia_ultima_modificacion { get; set; }
        public bool ActivoChk { get; set; }
    }

    public class DispositivosModel
    {
        public string dispositivo_id { get; set; }
        public string clave { get; set; }
        public string descripcion { get; set; }
        public string rendimiento_hr { get; set; }
        public string rendimiento_min { get; set; }
        public string cable_idA { get; set; }
        public string cable_idB { get; set; }
        public string familia_id { get; set; }
        public string dispositivo_estatus_baja { get; set; }
        public string dispositivo_fecha_alta { get; set; }
        public string dispositivo_fecha_baja { get; set; }
        public bool ActivoChk { get; set; }
    }
}
