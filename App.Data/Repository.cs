using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using Newtonsoft.Json;

namespace App.Data
{
    public class Repository
    {
        string connString = ConfigurationManager.ConnectionStrings["sConnection"].ConnectionString;

        public string getDataList(string spName, List<ParamModel> parameters)
        {
            string JSONString = string.Empty;
            DataSet dataSet = new DataSet();

            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    SqlCommand cmd = new SqlCommand(spName, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    conn.Open();
                    if (parameters != null)
                    {
                        for (int i = 0; i < parameters.Count; i++)
                        {
                            cmd.Parameters.AddWithValue(parameters[i].param, parameters[i].value);
                        }
                    }
                    SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                    adapter.Fill(dataSet);
                    if (dataSet != null)
                        JSONString = JsonConvert.SerializeObject(dataSet.Tables[0]);
                }
                catch (Exception e)
                {
                }
            }
            return JSONString;
        }


        public string getSingleValue(string spName, List<ParamModel> parameters)
        {
            string result = string.Empty;
            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    SqlCommand cmd = new SqlCommand(spName, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    conn.Open();
                    if (parameters != null)
                    {
                        for (int i = 0; i < parameters.Count; i++)
                        {
                            cmd.Parameters.AddWithValue(parameters[i].param, parameters[i].value);
                        }
                    }

                    result = cmd.ExecuteScalar().ToString();
                }
                catch (Exception e)
                {
                }
            }
            return result;
        }

        public string insData(string spName, List<ParamModel> parameters)
        {
            string result = "0";
            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    SqlCommand cmd = new SqlCommand(spName, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    conn.Open();
                    if (parameters != null)
                    {
                        for (int i = 0; i < parameters.Count; i++)
                        {
                            cmd.Parameters.AddWithValue(parameters[i].param, parameters[i].value);
                        }
                    }
                    result = cmd.ExecuteScalar().ToString();
                }
                catch (Exception e)
                {
                    return JsonConvert.SerializeObject(e);
                }
            }
            return result;
        }

        public string updData(string spName, List<ParamModel> parameters)
        {
            string result = "0";
            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    SqlCommand cmd = new SqlCommand(spName, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    conn.Open();
                    if (parameters != null)
                    {
                        for (int i = 0; i < parameters.Count; i++)
                        {
                            cmd.Parameters.AddWithValue(parameters[i].param, parameters[i].value);
                        }
                    }
                    cmd.ExecuteNonQuery();
                    result = "1";
                }
                catch (Exception e)
                {
                }
            }
            return result;
        }

    }

    public class ParamModel
    {
        public string param { get; set; }
        public string value { get; set; }
    }
}
