package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)


type APIServer struct {
	addr string
	store Store
}


func NewAPIServer(addr string, store Store) *APIServer {
	return &APIServer{addr: addr, store: store}
}

func (s * APIServer) Server(){
	router := mux.NewRouter()
	subrouter := router.PathPrefix("/api/v1").Subrouter()

	log.Println("Start the API server at", s.addr)
	log.Fatal(http.ListenAndServe(s.addr, subrouter))
}