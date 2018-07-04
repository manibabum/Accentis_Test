using System;

namespace Accentis.Business.Model
{
    public class ContractDutyModel
    {
        public int? Cdid { get; set; }
        public int BuildingId { get; set; }
        public string TaskCode { get; set; }
        public string Description { get; set; }
        public string Value { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public BuildingModel Building { get; set; }
    }
}
