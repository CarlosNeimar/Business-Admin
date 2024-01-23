package CarlosNeimar.BusinessAdmin.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import CarlosNeimar.BusinessAdmin.Models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    
    
}
