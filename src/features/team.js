import { fetchTeamMembers } from "../services/api";

export async function initTeam() {

    const teamElement = document.getElementById("team");

    const loadingElement = document.getElementById("loading");

    const reloadButton = document.getElementById("reload");

    async function loadTeam() {

        try {
            loadingElement.style.display = "block";

            const team = await fetchTeamMembers();

            teamElement.innerHTML = team.map(member => `
                    <li>
                        <strong>${member.name}</strong><br>
                        Email: ${member.email}<br>
                        Company: ${member.company.name}<br>
                        City: ${member.address.city}
                    </li>
                `)
                .join("");

        } catch (error) {
            teamElement.innerHTML =`<li>Unable to load team members</li>`;

            console.error(error);

        } finally {
            loadingElement.style.display = "none";

        }
    }

    reloadButton.addEventListener("click", loadTeam);

    await loadTeam();


}