const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_HOST;

export async function fetchProfileData(token) {
  try {
    const response = await fetch(`${API_BASE_URL}/Api/profile`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (response.ok) {
      return data.Data;
    } else {
      throw new Error(data.error || 'Failed to fetch profile data');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchProjectsData(token) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/business/Getprojectdata`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data.data.ProjectList;
    } else {
      throw new Error(data.error || 'Failed to fetch project data');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchProjectDetails(token, projectId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/projectinfo/${projectId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (response.ok) {
      return data.data;
    } else {
      throw new Error(data.error || 'Failed to fetch project details');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchAppliedFreelancers(token, projectId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/business/appliedFreelancerData/${projectId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (response.ok) {
      return data.data;
    } else {
      throw new Error(data.error || 'Failed to fetch applied freelancers data');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

