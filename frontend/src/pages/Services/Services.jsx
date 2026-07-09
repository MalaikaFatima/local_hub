import { useEffect, useState } from "react";

import { useAuth } from "../../context/AuthContext";

import PageHeader from "../../components/crud/PageHeader";
import FormModal from "../../components/crud/FormModal";
import SearchInput from "../../components/crud/SearchInput";

import ServiceForm from "../../components/services/ServiceForm";
import ServiceTable from "../../components/services/ServiceTable";

import {
    getServices,
    createService,
    updateService,
    deleteService,
} from "../../services/serviceService";

function Services() {

    const { token } = useAuth();

    const [services, setServices] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const [search, setSearch] = useState("");

    const [open, setOpen] = useState(false);

    const [selected, setSelected] = useState(null);

    useEffect(() => {

        fetchServices();

    }, []);

    useEffect(() => {

        setFiltered(

            services.filter(service =>

                service.title.toLowerCase().includes(search.toLowerCase())

            )

        );

    }, [search, services]);

    async function fetchServices() {

        const data = await getServices(token);

        setServices(data);

        setFiltered(data);

    }

    async function saveService(form) {
      
        try {
    
            if (selected) {
    
                await updateService(token, selected.id, form);
    
            } else {
    
                await createService(token, form);
    
            }
    
            await fetchServices();
    
            setOpen(false);
    
            setSelected(null);
    
        } catch (error) {
    
            console.log(error);
    
            console.log(error.response?.data);
            console.log("Selected:", selected);
            console.log("Selected ID:", selected?.id);
        }
    
    } async function removeService(id) {

        if (!window.confirm("Delete Service?")) return;

        await deleteService(token, id);

        fetchServices();

    }

    return (

        <div>

            <PageHeader

                title="Services"

                subtitle="Manage your services"

                buttonText="Add Service"

                onClick={() => {

                    setSelected(null);

                    setOpen(true);

                }}

            />

            <SearchInput

                value={search}

                onChange={(e) => setSearch(e.target.value)}

            />

            <ServiceTable

                services={filtered}

                onEdit={(service) => {

                    setSelected(service);

                    setOpen(true);

                }}

                onDelete={removeService}

            />

            <FormModal

                open={open}

                title={selected ? "Edit Service" : "Add Service"}

                onClose={() => {

                    setOpen(false);

                    setSelected(null);

                }}

            >

                <ServiceForm

                    service={selected}

                    onSubmit={saveService}

                />

            </FormModal>

        </div>

    );

}

export default Services;