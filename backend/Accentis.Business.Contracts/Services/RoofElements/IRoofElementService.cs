using Accentis.Database.Domain.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accentis.Business.Contracts.Services.RoofElements
{
    public interface IRoofElementService
    {
        void CreateRoofElement(RoofElement roofElement);

        void UpdateRoofElement(RoofElement roofElement);

        RoofElement GetRoofElement(int id);

        List<RoofElement> GetAllRoofElements();

        List<RoofElement> Get();
    }
}
