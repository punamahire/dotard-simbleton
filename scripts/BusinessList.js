import { getBusinessData, businessInNYArr, manufacturingArr, getPurchasingAgents, purchasingAgentNames } from "./BusinessData.js"
import { getBusiness, getAgent, getAgentName } from "./Business.js"

// List all Dotard & Simbleton companies 
const contentTarget = document.querySelector(".business")

export const businessList = () => {
    const businessArray = getBusinessData()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += getBusiness(businessObject)
        }
    );
}

// List Dotard & Simbleton companies that are in New York
const contentTargetNY = document.querySelector(".businessList--newYork")

export const businessListNY = () => {
    contentTargetNY.innerHTML = "<h1>New York Businesses</h1>"

    businessInNYArr.forEach(
        (businessObject) => {
            contentTargetNY.innerHTML += getBusiness(businessObject)
        }
    );
}

// List Dotard & Simbleton companies that are in manufacturing
const contentTargetManufacturing = document.querySelector(".businessList--manufacturing")

export const businessListOfManufacturing = () => {
    contentTargetManufacturing.innerHTML = "<h1>Manufacturing Businesses</h1>"

    manufacturingArr.forEach(
        (businessObject) => {
            contentTargetManufacturing.innerHTML += getBusiness(businessObject)
        }
    );
}

// List the details of Purchasing agents in Dotard & Simbleton companies
const contentTargetPurchaseAgent = document.querySelector(".agents--details")

export const listPurchaseAgents = () => {
    const purchaseAgents = getPurchasingAgents()
    contentTargetPurchaseAgent.innerHTML = "<h1>Purchasing Agents' Details</h1>"
    
    purchaseAgents.forEach(
        (agentObject) => {
            contentTargetPurchaseAgent.innerHTML += getAgent(agentObject)
        }
    );
}

// List the names of purchasing agents in Dotard & Simbleton companies 
const contentTargetAgentNames = document.querySelector(".agent--names")

export const listAgentNames = () => {
    contentTargetAgentNames.innerHTML = "<h1>Purchasing Agents' Names</h1>" 

    purchasingAgentNames.forEach(
        (agentObject) => {
            contentTargetAgentNames.innerHTML += getAgentName(agentObject)
        }
    );
}

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")
const allBusinesses = getBusinessData()
document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {

            const foundBusiness = allBusinesses.find(business => {
                (business.companyName.includes(keyPressEvent.target.value))
            })
            console.log(foundBusiness);
            companySearchResultArticle.innerHTML = `<h2>${foundBusiness.companyName}</h2>
                                                    <section>
                                                        ${foundBusiness.addressFullStreet}
                                                    </section>
                                                    <section>
                                                        ${foundBusiness.addressCity},
                                                        ${foundBusiness.addressStateCode}
                                                        ${foundBusiness.addressZipCode}
                                                    </section>
                                                `;
    }
});
