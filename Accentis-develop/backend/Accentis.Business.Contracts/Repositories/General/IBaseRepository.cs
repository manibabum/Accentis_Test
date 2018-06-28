using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Accentis.Business.Contracts.Repositories.General
{
    public interface IBaseRepository<T>
    {
        List<T> Get();
        IEnumerable<T> FindByCondition(Expression<Func<T, bool>> expression);
        void Insert(T entity);
        void Update(T entity);
        void Delete(T entity);
        void Save();
        T Get(int id);
    }
}
