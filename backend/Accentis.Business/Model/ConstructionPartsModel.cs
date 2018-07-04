using System;

namespace Accentis.Business.Model
{
    public class ConstructionPartsModel
    {
        public int? CPID { get; set; }
        public string LayerType { get; set; }
        public string Description { get; set; }
        public string Lamda { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
