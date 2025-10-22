-- Script para crear las tablas del modelo de datos
-- Base de datos: stage_club

-- Crear tabla de tipos de artista (si no existe)
CREATE TABLE IF NOT EXISTS public.ma_artist_type (
    art_id SERIAL PRIMARY KEY,
    art_name varchar(50) NOT NULL,
    art_description varchar(200),
    art_version bool DEFAULT true NOT NULL,
    ts_crea timestamptz DEFAULT now() NOT NULL,
    ts_mod timestamptz NULL
);

-- Crear tabla de regiones (si no existe)
CREATE TABLE IF NOT EXISTS public.ma_region (
    reg_id SERIAL PRIMARY KEY,
    reg_name varchar(100) NOT NULL,
    reg_code varchar(10),
    reg_version bool DEFAULT true NOT NULL,
    ts_crea timestamptz DEFAULT now() NOT NULL,
    ts_mod timestamptz NULL
);

-- Crear tabla de comunas (si no existe)
CREATE TABLE IF NOT EXISTS public.ma_commune (
    com_id SERIAL PRIMARY KEY,
    com_name varchar(100) NOT NULL,
    reg_id int2 REFERENCES public.ma_region(reg_id),
    com_version bool DEFAULT true NOT NULL,
    ts_crea timestamptz DEFAULT now() NOT NULL,
    ts_mod timestamptz NULL
);

-- Crear tabla de perfiles de artista
CREATE TABLE IF NOT EXISTS public.artist_profiles (
    ap_id SERIAL PRIMARY KEY,
    ap_artist_name varchar(100) NOT NULL,
    ap_first_name varchar(80),
    ap_last_name varchar(80),
    ap_email varchar(100) UNIQUE,
    ap_phone varchar(25),
    ap_bio varchar(500),
    ap_avatar_url varchar(200),
    ap_birthdate date,
    art_id int2 REFERENCES public.ma_artist_type(art_id),
    reg_id int2 REFERENCES public.ma_region(reg_id),
    com_id int2 REFERENCES public.ma_commune(com_id),
    ap_address varchar(150),
    ap_website varchar(100),
    ap_instagram varchar(100),
    ap_facebook varchar(100),
    ap_youtube varchar(100),
    ap_spotify varchar(100),
    ap_version bool DEFAULT true NOT NULL,
    ts_crea timestamptz DEFAULT now() NOT NULL,
    ts_mod timestamptz NULL
);

-- Crear tabla de proyectos musicales
CREATE TABLE IF NOT EXISTS public.musical_projects (
    mp_id bigserial NOT NULL,
    mp_project_name varchar(120) NOT NULL,
    art_id int2 NULL REFERENCES public.ma_artist_type(art_id),
    mp_active_since date NULL,
    mp_desciption varchar(250) NULL,
    mp_bio varchar(512) NULL,
    mp_avatar_url varchar(200) NULL,
    mp_main_image_url varchar(300) NULL,
    mp_website varchar(100) NULL,
    mp_email_band varchar(80) NULL,
    reg_id int2 NULL REFERENCES public.ma_region(reg_id),
    com_id int2 NULL REFERENCES public.ma_commune(com_id),
    mp_direccion varchar(120) NULL,
    mp_telephone varchar(25) NULL,
    mp_version bool DEFAULT true NOT NULL,
    ts_crea timestamptz DEFAULT now() NOT NULL,
    ts_mod timestamptz NULL,
    CONSTRAINT musical_projects_pkey PRIMARY KEY (mp_id)
);

-- Crear tabla intermedia para relacionar artistas con proyectos musicales
CREATE TABLE IF NOT EXISTS public.project_members (
    pm_id BIGSERIAL PRIMARY KEY,
    mp_id int8 REFERENCES musical_projects(mp_id) ON DELETE CASCADE,
    ap_id int2 REFERENCES artist_profiles(ap_id) ON DELETE CASCADE,
    pm_role varchar(50), -- Rol del artista en el proyecto (vocalista, guitarrista, etc.)
    pm_is_leader bool DEFAULT false, -- Si es el líder del proyecto
    pm_join_date date DEFAULT CURRENT_DATE,
    pm_version bool DEFAULT true NOT NULL,
    ts_crea timestamptz DEFAULT now() NOT NULL,
    ts_mod timestamptz NULL,
    UNIQUE(mp_id, ap_id) -- Un artista no puede estar duplicado en el mismo proyecto
);

-- Insertar algunos datos de ejemplo para tipos de artista
INSERT INTO public.ma_artist_type (art_name, art_description) VALUES
('Banda', 'Grupo musical con múltiples integrantes'),
('Solista', 'Artista individual'),
('Dúo', 'Pareja musical'),
('DJ', 'Disc Jockey'),
('Productor', 'Productor musical')
ON CONFLICT DO NOTHING;

-- Insertar algunos datos de ejemplo para regiones
INSERT INTO public.ma_region (reg_name, reg_code) VALUES
('Región Metropolitana', 'RM'),
('Valparaíso', 'V'),
('Biobío', 'VIII'),
('Antofagasta', 'II'),
('La Araucanía', 'IX')
ON CONFLICT DO NOTHING;

-- Insertar algunas comunas de ejemplo
INSERT INTO public.ma_commune (com_name, reg_id) VALUES
('Santiago', 1),
('Las Condes', 1),
('Providencia', 1),
('Valparaíso', 2),
('Viña del Mar', 2),
('Concepción', 3),
('Temuco', 5)
ON CONFLICT DO NOTHING;