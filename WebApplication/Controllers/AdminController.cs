using System;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using System.IO;
using System.Web.Configuration;
using App.Model;
using App.Business;
using App.Contracts;
using WebApplication.Extensions;
using System.Collections.Generic;
using System.Linq;

namespace WebApplication.Controllers
{
    public class AdminController : Controller
    {

        private IGenericList _genericList;
        private IAdmin _Admin;
        private string idUser;
        private string nameUser;

        protected override void Initialize(System.Web.Routing.RequestContext requestContext)
        {
            base.Initialize(requestContext);
            idUser = "0";
            nameUser = "";
            if (requestContext.HttpContext.User.Identity.IsAuthenticated)
            {
                idUser = requestContext.HttpContext.User.Identity.GetIdSystemUser().ToString();
                nameUser = requestContext.HttpContext.User.Identity.GetUserNameIdentifier().ToString();
            }
        }

        public AdminController()
        {
            _Admin = new Admin();
            _genericList = new GenericList();
        }


        //? Productos y Servicios
        public ActionResult Producto()
        {
            return View();
        }

        public ActionResult Productos()
        {
            return View();
        }





        //! Dispositivos Controllers

        public ActionResult Dispositivo()
        {
            return View();
        }

        public ActionResult Dispositivos()
        {
            return View();
        }










        //? Views From Marcas

        public ActionResult Marcas()
        {
            return View();
        }



        public ActionResult PPMBuscar()
        {
            return View();
        }

        public ActionResult PPMNuevo()
        {
            return View();
        }

        //? Render views de Cables

        public ActionResult Cables()
        {
            return View();
        }

        //? Render views de Disciplina

        public ActionResult Disciplinas()
        {
            return View();
        }

        //? Render views de Cables

        public ActionResult Clientes()
        {
            return View();
        }

        //? Render Sucursales

        public ActionResult Sucursales()
        {
            return View();
        }



        //? Actions From Dispositivos

        public ActionResult GetDispositivos()
        {
            var list = new List<DispositivosModel>();
            list = _Admin.GetDispositivos().ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Dispositivo(string Id)
        {
            DispositivosModel dispositivo = new DispositivosModel();
            if (Id != "0")
            {
                dispositivo = _Admin.GetDispositivosById(Id);
            }
            else
            {
                dispositivo.dispositivo_id = "0";
            }
            return View(dispositivo);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Marca(DispositivosModel dispositivo)
        {
            string result = _Admin.AddDispositivo(dispositivo);
            if (Int32.Parse(result) > 0)
            {
                return RedirectToAction("Dispositivos", "Admin");
            }
            else
            {
                TempData["NotificationMessage"] = "Ya existe un dispositivo con ese nombre.";
                return RedirectToAction("Marca", "Admin", new { id = 0 });
            }

            return View(dispositivo);
        }



        //? Actions From Marcas

        public ActionResult GetMarcas()
        {
            var list = new List<MarcasModel>();
            list = _Admin.GetMarcas().ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Marca(string Id)
        {
            MarcasModel marca = new MarcasModel();
            if (Id != "0")
            {
                marca = _Admin.GetMarcaById(Id);
            }
            else
            {
                marca.marca_id = "0";
            }
            return View(marca);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Marca(MarcasModel marca)
        {
            string result = _Admin.AddMarca(marca);
            if (Int32.Parse(result) > 0)
            {
                return RedirectToAction("Marcas", "Admin");
            }
            else
            {
                TempData["NotificationMessage"] = "Ya existe una marca con ese nombre.";
                return RedirectToAction("Marca", "Admin", new { id = 0 });
            }

            return View(marca);
        }

        //? Viewś from proveedores
        public ActionResult Proveedores()
        {
            return View();
        }

        public ActionResult Proveedor(String Id)
        {
            ProveedoresModel proveedor = new ProveedoresModel();
            if (Id != "0")
            {
                proveedor = _Admin.GetProveedorById(Id);
            }
            else
            {
                proveedor.proveedor_id = "0";
            }
            return View(proveedor);
        }

        //? Actions from proveedores


        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Proveedor(ProveedoresModel proveedor)
        {
            string result = _Admin.AddProveedor(proveedor);
            if (result != "0")
            {
                return RedirectToAction("Proveedores", "Admin");
            }
            return View(proveedor);
        }


        public ActionResult GetProveedores()
        {
            var list = new List<ProveedoresModel>();
            list = _Admin.GetProveedores().ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }


        //? aCtion from cables
        public ActionResult GetCables()
        {
            var list = new List<CablesModel>();
            list = _Admin.GetCables().ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Cable(string Id)
        {
            CablesModel cable = new CablesModel();
            if (Id != "0")
            {
                cable = _Admin.GetCableById(Id);
            }
            else
            {
                cable.cable_id = "0";
            }
            return View(cable);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Cable(CablesModel cable)
        {
            string result = _Admin.AddCable(cable);
            if (result != "0")
            {
                return RedirectToAction("Cables", "Admin");
            }
            return View(cable);
        }

        //? Action from clientes
        public ActionResult GetClientes()
        {
            var list = new List<ClientesModel>();
            list = _Admin.GetClientes().ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Cliente(string Id)
        {
            ClientesModel cliente = new ClientesModel();
            if (Id != "0")
            {
                cliente = _Admin.GetClienteById(Id);
            }
            else
            {
                cliente.cliente_id = "0";
            }
            return View(cliente);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Cliente(ClientesModel cliente)
        {
            string result = _Admin.AddCliente(cliente);
            if (result != "0")
            {
                return RedirectToAction("Clientes", "Admin");
            }
            return View(cliente);
        }

        //? Action from disciplinas
        public ActionResult GetDisciplinas()
        {
            var list = new List<DisciplinasModel>();
            list = _Admin.GetDisciplinas().ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Disciplina(string Id)
        {
            DisciplinasModel disciplina = new DisciplinasModel();
            if (Id != "0")
            {
                disciplina = _Admin.GetDisciplinaById(Id);
            }
            else
            {
                disciplina.familia_id = "0";
            }
            return View(disciplina);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Disciplina(DisciplinasModel disciplina)
        {
            string result = _Admin.AddDisciplina(disciplina);
            if (result != "0")
            {
                return RedirectToAction("Disciplinas", "Admin");
            }
            return View(disciplina);
        }


        //? Action from sucursales

        public ActionResult GetSucursales()
        {
            var list = new List<SucursalesModel>();
            list = _Admin.GetSucursales().ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Sucursal(string Id)
        {
            SucursalesModel sucursal = new SucursalesModel();
            if (Id != "0")
            {
                sucursal = _Admin.GetSucursalById(Id);
            }
            else
            {
                sucursal.sucursal_id = "0";
            }
            return View(sucursal);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Sucursal(SucursalesModel sucursal)
        {
            string result = _Admin.AddSucursal(sucursal);
            if (result != "0")
            {
                return RedirectToAction("Sucursales", "Admin");
            }
            return View(sucursal);
        }

        //? Action from Proveedores por marcas
        private ActionResult GetPMarcas(string marca_id)
        {
            var list = new List<PMarcaModel>();
            list = _Admin.GetPMarcas().ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult PPMNuevoMarca(PMarcaModel pmarca)
        {
            string result = _Admin.AddPMarca(pmarca);
            if (result != "0")
            {
                return RedirectToAction("PPMBuscar", "Admin");
            }

            return RedirectToAction("PPMNuevoMarca", "Admin");
        }

        [HttpDelete]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult DelPMarca(PMarcaModel pmarca)
        {
            string result = _Admin.DelPMarcaById(pmarca);
            if (result != "0")
            {
                return RedirectToAction("PPMBuscar", "Admin");
            }

            return RedirectToAction("PPMBuscar", "Admin");
        }

        //Dropdowns
        public ActionResult GetTiposProveedor()
        {
            var list = _genericList.GetListOfItems(ListName.TipoProveedor);
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }


    }
}