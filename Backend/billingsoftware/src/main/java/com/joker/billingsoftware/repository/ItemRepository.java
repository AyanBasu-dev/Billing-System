package com.joker.billingsoftware.repository;

import com.joker.billingsoftware.entity.CategoryEntity;
import com.joker.billingsoftware.entity.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ItemRepository extends JpaRepository<ItemEntity, Long> {
    Optional<ItemEntity> findByItemId(String itemId);

    Integer countByCategory(CategoryEntity category);
}
