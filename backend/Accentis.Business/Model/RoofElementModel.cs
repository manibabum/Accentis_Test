using System;
using System.Collections.Generic;
using System.Text;

namespace Accentis.Business.Model
{
   public class RoofElementModel
    {
        public int? Reid { get; set; }
        public int RoofId { get; set; }
        public string Part { get; set; }
        public string Element { get; set; }
        public int Size { get; set; }
        public int Share { get; set; }
        public DateTime Date { get; set; }
        public string StandardCondition { get; set; }
        public string CurrentCondition { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public RoofModel Roof { get; set; }
    }
}
