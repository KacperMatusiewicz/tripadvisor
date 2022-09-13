package com.example.backend;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class BackendApplication implements ApplicationRunner {

    private final HotelRepository hotelRepository;

    public BackendApplication(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        hotelRepository.saveAll(
                Arrays.asList(
                        new Hotel("Bristol", "Warsaw", 750 ),
                        new Hotel("Marriott", "Warsaw", 750 ),
                        new Hotel("Sheraton", "Warsaw", 750 ),
                        new Hotel("Hilton", "Warsaw", 750 )
                )
        );
    }
}
