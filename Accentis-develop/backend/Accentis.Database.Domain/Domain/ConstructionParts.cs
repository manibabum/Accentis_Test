using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class ConstructionParts
    {
        public int Cpid { get; set; }
        public string LayerType { get; set; }
        public string Description { get; set; }
        public string Lamda { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
