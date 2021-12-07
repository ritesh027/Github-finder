class UI{
    constructor(){
        this.profile=document.getElementById('profile');
    }

    showProfile(user){

        console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block justify-content-center mb-2 ">View Profile</a>
                    </div>
                    <div class="col-md-9">
                      

                         <span class="badge bg-primary p-3 mr-2">Public Repos: ${user.public_repos}</span>
                         <span class="badge bg-warning p-3 mr-2">Public Gists: ${user.public_gists}</span>
                         <span class="badge bg-dark p-3 mr-2">Followers: ${user.followers}</span>
                         <span class="badge bg-secondary p-3 mr-2">Following: ${user.following}</span>
                        <br><br>

                        <ul class="list-group">
                            <li class="list-group-item bg-light">Name: ${user.name}</li>
                            <li class="list-group-item bg-dark">Company: ${user.company}</li>
                            <li class="list-group-item bg-light">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item bg-dark">Location: ${user.location}</li>
                            <li class="list-group-item bg-light">Member Since: ${user.created_at}</li>

                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading-mb-3">Latest Repos</h3>


        `;
    }
}