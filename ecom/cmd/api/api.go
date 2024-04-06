package api

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/HenriqueMartinsBotelho/ecom/services/user"
	"github.com/gorilla/mux"
)

type APIServer struct {
	addr string
	db   *sql.DB
}

func NewAPIServer(addr string, db *sql.DB) *APIServer {
	return &APIServer{addr, db}
}

func (s *APIServer) Run() error {
	router := mux.NewRouter()
	subrouter := router.PathPrefix("/api/v1").Subrouter()

	userStore := user.NewStore(s.db)
	useHandler := user.NewHandler(userStore)
	useHandler.RegisterRoutes(subrouter)

	log.Println("Listening on port: ", s.addr)
	return http.ListenAndServe(s.addr, router)
}
