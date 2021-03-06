package com.linkedin.learning.reactivespring.service;

import com.linkedin.learning.reactivespring.model.CoinBaseResponse;
import com.linkedin.learning.reactivespring.model.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.ReactiveMongoOperations;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

public class CoinbaseServiceImpl implements CoinbaseService {

    @Autowired
    private WebClient webClient;

    @Autowired
    private ReactiveMongoOperations reactiveMongoTemplate;

    @Override
    public Mono<CoinBaseResponse> getCryptoPrice(String priceName) {
        return webClient.get()
                .uri("https://api.coinbase.com/v2/prices/{crypto/buy}", priceName)
                .exchange()
                .flatMap(clientResponse -> clientResponse.bodyToMono(CoinBaseResponse.class));
    }

    @Override
    public Mono<Purchase> createPurchase(String priceName) {
        return getCryptoPrice(priceName).flatMap(price -> reactiveMongoTemplate.save(
                new Purchase(priceName, price.getData().getAmount(), LocalDateTime.now())
        ));
    }
}
