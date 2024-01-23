package CarlosNeimar.BusinessAdmin.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import CarlosNeimar.BusinessAdmin.Models.Business;

@Repository
public interface BusinessRepository extends JpaRepository<Business, Long>{
    
    List<Business> findByUser_Id(Long id);

}
