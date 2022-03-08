export const getBusiness = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__companyName">${businessObject.companyName}</h2>
            <div class="business__venue">
                <p class="business__address">${businessObject.addressFullStreet}</br>
                ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
            </div>
        </section>
        <hr>
    `
}

export const getAgent = (agentObject) => {
    return `
        <section class="purchase_agents">
            <h2 class="agent_name">${agentObject.fullName}</h2>
            <div class="agent_details">
                <h3>${agentObject.company}</h3>
                <h4>${agentObject.phoneNumber}</h4>
            </div>
        </section>
        <hr>
        `
}

export const getAgentName = (agentObject) => {
    return `
            <section class="agent_name">
                <h3 class="agent_fullName">${agentObject.nameFirst} ${agentObject.nameLast}</h3>
            </section>
            <hr>
        `
}