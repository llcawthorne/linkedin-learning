package com.linkedin.learning.reactivespring.config;

import com.linkedin.learning.reactivespring.controller.PurchaseHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.config.EnableWebFlux;

@Configuration
@EnableWebFlux
public class WebConfig {

    @Bean
    public PurchaseHandler purchaseHandler() {
        return new PurchaseHandler();
    }
}
