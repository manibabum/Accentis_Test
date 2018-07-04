using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class ElementConstructions
    {
        public int Rseid { get; set; }
        public int Rsid { get; set; }
        public int RoofId { get; set; }
        public string Part { get; set; }
        public string LayerDescription { get; set; }
        public string Thickness { get; set; }
        public string Lambda { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Roof Roof { get; set; }
        public RoofConstruction Rs { get; set; }
    }
}
