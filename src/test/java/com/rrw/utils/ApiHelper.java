package com.rrw.utils;


import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import io.restassured.http.ContentType;
import java.util.Map;

public class ApiHelper {

    // Sends a GET request to the full URL (accepts query string already appended)
    public static Response sendGetRequest(String fullUrl) {
        return given()
                .relaxedHTTPSValidation()
                .accept(ContentType.JSON)
                .when()
                .get(fullUrl)
                .then()
                .extract()
                .response();
    }
    
    public static Response getSearchAutoComplete(String searchTerm) {

        return given()
                .relaxedHTTPSValidation()
                .accept(ContentType.JSON)
                .queryParam("search[term]", searchTerm)
        .when()
                .get("https://stagingapi.roadreadywheels.com/api/v2/storefront/search/autocomplete")
        .then()
                .extract()
                .response();
    }

    // Overload: path relative to baseUri (if you set RestAssured.baseURI in Hooks)
    public static Response sendGetRequestPath(String path, Map<String, ?> queryParams, Map<String, String> headers) {
        var spec = given().relaxedHTTPSValidation()
                          .accept(ContentType.JSON);

        if (queryParams != null && !queryParams.isEmpty()) spec = spec.queryParams(queryParams);
        if (headers != null && !headers.isEmpty()) spec = spec.headers(headers);

        return spec.when().get(path).then().extract().response();
    }
}
