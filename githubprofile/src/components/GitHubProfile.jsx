import React, { useState } from "react";

import axios from "axios";

const API_URL = "https://api.github.com/users/";

const GitHubProfile = () => {

    const [userData, setUserData] = useState(null);
    
    const [repos, setRepos] = useState([]);
    
    const [error, setError] = useState(null);
    
    const [search, setSearch] = useState("");

    const getUser = async (username) => {
        
        try {
            const { data } = await axios.get(API_URL + username);
            setUserData(data);
            setError(null);
            getRepos(username);
        } catch (err) {
            setError("No Profile with this username");
            setUserData(null);
            setRepos([]);
        }
    };

    const getRepos = async (username) => {
        
        try {
            const { data } = await axios.get(`${API_URL}${username}/repos?sort=created`);
            setRepos(data.slice(0, 5));
        } catch {
            setError("Problem fetching the repos");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim()) {
            getUser(search.trim());
            setSearch("");
        }
    };

    return (
        <div>
            <form className="user-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search a Github User"
                />
            </form>

            <main id="main">
                {error && (
                    <div className="card">
                        <h1>{error}</h1>
                    </div>
                )}

                {userData && (
                    <div className="card">
                        <div>
                            <img src={userData.avatar_url} alt={userData.name} className="avatar" />
                        </div>
                        <div className="user-info">
                            <h2>{userData.name}</h2>
                            <p>{userData.bio}</p>
                            <ul>
                                <li>{userData.followers} <strong>Followers</strong></li>
                                <li>{userData.following} <strong>Following</strong></li>
                                <li>{userData.public_repos} <strong>Repos</strong></li>
                            </ul>

                            <div id="repos">
                                {repos.map((repo) => (
                                    <a key={repo.id} href={repo.html_url} className="repo" target="_blank" rel="noopener noreferrer">
                                        {repo.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default GitHubProfile;
