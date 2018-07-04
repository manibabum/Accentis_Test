using System;

namespace Accentis.Business.Model
{
    public class ElementConstructionModel
    {
        public int? Rseid { get; set; }
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

        public RoofModel Roof { get; set; }
        public RoofConstructionModel Rs { get; set; }
    }
}
