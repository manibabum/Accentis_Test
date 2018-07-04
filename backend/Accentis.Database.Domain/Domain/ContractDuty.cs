using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class ContractDuty
    {
        public int Cdid { get; set; }
        public int BuildingId { get; set; }
        public string TaskCode { get; set; }
        public string Description { get; set; }
        public string Value { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Building Building { get; set; }
    }
}
