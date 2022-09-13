package com.example.backend;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/hotel")
@CrossOrigin(origins = "*")
public class HotelController {

    private final HotelRepository hotelRepository;

    public HotelController(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @PostMapping
    public Hotel addHotel(@RequestBody Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    @GetMapping
    public List<Hotel> listHotels() {
        return hotelRepository.findAll();
    }

    @GetMapping("{id}")
    public Hotel getHotelById(@PathVariable Long id) {
        return hotelRepository.findById(id).orElseThrow(() -> new RuntimeException("Hotel not found."));
    }

    @DeleteMapping("{id}")
    public void deleteHotel(@PathVariable Long id) {
        hotelRepository.deleteById(id);
    }
}
