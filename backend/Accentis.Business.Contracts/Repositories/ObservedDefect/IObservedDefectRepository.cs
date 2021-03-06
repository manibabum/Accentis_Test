﻿using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.ObservedDefect
{
   public interface IObservedDefectRepository:IBaseRepository<ObservedDefects>
    {
        List<ObservedDefects> GetAllObservedDefects();
    }
}
