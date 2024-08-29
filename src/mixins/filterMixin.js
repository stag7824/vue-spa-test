export default {
    methods: {
      applyFilters(users, searchQuery, role, status) {
        let filtered = users;
  
        if (role) {
          filtered = filtered.filter(user => user.role === role);
        }
  
        if (status) {
          filtered = filtered.filter(user => user.status === status);
        }
  
        if (searchQuery) {
          const queries = searchQuery.split(' ').map(query => query.split(':'));
          queries.forEach(([key, value]) => {
            filtered = filtered.filter(user => {
              // Check if user[key] is defined before applying .toString().toLowerCase()
              return user[key] && user[key].toString().toLowerCase() === value.toLowerCase();
            });
          });
        }
  
        return filtered;
      }
    }
  };
  