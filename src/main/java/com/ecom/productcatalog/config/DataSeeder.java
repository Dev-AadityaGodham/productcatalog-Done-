package com.ecom.productcatalog.config;

import com.ecom.productcatalog.model.Category;
import com.ecom.productcatalog.model.Product;
import com.ecom.productcatalog.repository.CategoryRepository;
import com.ecom.productcatalog.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public void run(String... args) throws Exception {
        //clear all existing data
        productRepository.deleteAll();
        categoryRepository.deleteAll();

        //Create Categories
        Category electronics = new Category();
        electronics.setName("Electronics");

        Category clothing = new Category();
        clothing.setName("Clothing");

        Category home = new Category();
        home.setName("Home and Kitchen");

        categoryRepository.saveAll(Arrays.asList(electronics , clothing ,home));
        //create product
        Product phone = new Product();
        phone.setName("SmartPhone");
        phone.setDescription("Latest model smartPhone with amazing features");
        phone.setImageUrl("https://picsum.photos/600/400");
        phone.setPrice(555.55);
        phone.setCategory(electronics);

        Product laptop = new Product();
        laptop.setName("Laptop");
        laptop.setDescription("High Performance Laptop for work and play");
        laptop.setImageUrl("https://picsum.photos/600/400");
        laptop.setPrice(234.2);
        laptop.setCategory(electronics);

        Product jacket = new Product();
        jacket.setName("Winter Jacket");
        jacket.setDescription("Best jacket for winter");
        jacket.setImageUrl("https://picsum.photos/600/400");
        jacket.setPrice(25.55);
        jacket.setCategory(clothing);

        Product shirt = new Product();
        shirt.setName("Shirt");
        shirt.setDescription("Best for price and style");
        shirt.setImageUrl("https://picsum.photos/600/400");
        shirt.setPrice(5.55);
        shirt.setCategory(clothing);

        Product blender = new Product();
        blender.setName("Blender");
        blender.setDescription("Blend through ant food or vegetables");
        blender.setImageUrl("https://picsum.photos/600/400");
        blender.setPrice(15.55);
        blender.setCategory(home);

        Product table = new Product();
        table.setName("Table and Chair");
        table.setDescription("Buy now for the best price");
        table.setImageUrl("https://picsum.photos/600/400");
        table.setPrice(85.55);
        table.setCategory(home);


        productRepository.saveAll(Arrays.asList(phone,laptop,jacket,blender,table,shirt));

    }
}
